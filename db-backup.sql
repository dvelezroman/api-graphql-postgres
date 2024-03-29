PGDMP     &    -                x            seguros    11.7    12.2 K    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    19932    seguros    DATABASE     y   CREATE DATABASE seguros WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';
    DROP DATABASE seguros;
                doadmin    false            f           1247    20870    enum_users_role    TYPE     J   CREATE TYPE public.enum_users_role AS ENUM (
    'admin',
    'review'
);
 "   DROP TYPE public.enum_users_role;
       public          doadmin    false            �            1259    20845    clients    TABLE     �  CREATE TABLE public.clients (
    id integer NOT NULL,
    type character varying(255),
    document character varying(255),
    name character varying(255),
    address character varying(255),
    province character varying(255),
    city character varying(255),
    status boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "personId" integer
);
    DROP TABLE public.clients;
       public            doadmin    false            �            1259    20843    clients_id_seq    SEQUENCE     �   CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.clients_id_seq;
       public          doadmin    false    197            �           0    0    clients_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;
          public          doadmin    false    196            �            1259    20907 	   companies    TABLE     �   CREATE TABLE public.companies (
    id integer NOT NULL,
    ref character varying(255),
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.companies;
       public            doadmin    false            �            1259    20905    companies_id_seq    SEQUENCE     �   CREATE SEQUENCE public.companies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.companies_id_seq;
       public          doadmin    false    205            �           0    0    companies_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.companies_id_seq OWNED BY public.companies.id;
          public          doadmin    false    204            �            1259    20958    configs    TABLE     y  CREATE TABLE public.configs (
    id integer NOT NULL,
    mailserver character varying(255),
    mailuser character varying(255),
    mailpassword character varying(255),
    mailport character varying(255),
    welcome boolean,
    birthday boolean,
    renewal boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.configs;
       public            doadmin    false            �            1259    20956    configs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.configs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.configs_id_seq;
       public          doadmin    false    209            �           0    0    configs_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.configs_id_seq OWNED BY public.configs.id;
          public          doadmin    false    208            �            1259    20894    insurance_types    TABLE     �   CREATE TABLE public.insurance_types (
    id integer NOT NULL,
    name character varying(255),
    code character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 #   DROP TABLE public.insurance_types;
       public            doadmin    false            �            1259    20892    insurance_types_id_seq    SEQUENCE     �   CREATE SEQUENCE public.insurance_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.insurance_types_id_seq;
       public          doadmin    false    203            �           0    0    insurance_types_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.insurance_types_id_seq OWNED BY public.insurance_types.id;
          public          doadmin    false    202            �            1259    20920 
   insurances    TABLE     �  CREATE TABLE public.insurances (
    id integer NOT NULL,
    ref character varying(255),
    amount numeric,
    premium numeric,
    "from" timestamp with time zone,
    "to" timestamp with time zone,
    term character varying(255),
    comment character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "clientId" integer,
    "insuranceTypeId" integer,
    "personId" integer,
    "companyId" integer,
    "userId" integer
);
    DROP TABLE public.insurances;
       public            doadmin    false            �            1259    20918    insurances_id_seq    SEQUENCE     �   CREATE SEQUENCE public.insurances_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.insurances_id_seq;
       public          doadmin    false    207            �           0    0    insurances_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.insurances_id_seq OWNED BY public.insurances.id;
          public          doadmin    false    206            �            1259    20969    offices    TABLE     )  CREATE TABLE public.offices (
    id integer NOT NULL,
    ruc character varying(255),
    name character varying(255),
    address character varying(255),
    pathlogo character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.offices;
       public            doadmin    false            �            1259    20967    offices_id_seq    SEQUENCE     �   CREATE SEQUENCE public.offices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.offices_id_seq;
       public          doadmin    false    211            �           0    0    offices_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.offices_id_seq OWNED BY public.offices.id;
          public          doadmin    false    210            �            1259    20858    people    TABLE     �  CREATE TABLE public.people (
    id integer NOT NULL,
    document character varying(255),
    first_name character varying(255),
    last_name character varying(255),
    email character varying(255),
    city character varying(255),
    province character varying(255),
    address character varying(255),
    birthday timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    contact character varying(255)
);
    DROP TABLE public.people;
       public            doadmin    false            �            1259    20856 
   people_id_seq    SEQUENCE     �   CREATE SEQUENCE public.people_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.people_id_seq;
       public          doadmin    false    199            �           0    0 
   people_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.people_id_seq OWNED BY public.people.id;
          public          doadmin    false    198            �            1259    20877    users    TABLE     �  CREATE TABLE public.users (
    id integer NOT NULL,
    document character varying(255),
    first_name character varying(255),
    last_name character varying(255),
    username character varying(255),
    role public.enum_users_role,
    email character varying(255),
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public            doadmin    false    614            �            1259    20875    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          doadmin    false    201            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          doadmin    false    200            �           2604    20848 
   clients id    DEFAULT     h   ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);
 9   ALTER TABLE public.clients ALTER COLUMN id DROP DEFAULT;
       public          doadmin    false    197    196    197            �           2604    20910    companies id    DEFAULT     l   ALTER TABLE ONLY public.companies ALTER COLUMN id SET DEFAULT nextval('public.companies_id_seq'::regclass);
 ;   ALTER TABLE public.companies ALTER COLUMN id DROP DEFAULT;
       public          doadmin    false    205    204    205            �           2604    20961 
   configs id    DEFAULT     h   ALTER TABLE ONLY public.configs ALTER COLUMN id SET DEFAULT nextval('public.configs_id_seq'::regclass);
 9   ALTER TABLE public.configs ALTER COLUMN id DROP DEFAULT;
       public          doadmin    false    209    208    209            �           2604    20897    insurance_types id    DEFAULT     x   ALTER TABLE ONLY public.insurance_types ALTER COLUMN id SET DEFAULT nextval('public.insurance_types_id_seq'::regclass);
 A   ALTER TABLE public.insurance_types ALTER COLUMN id DROP DEFAULT;
       public          doadmin    false    203    202    203            �           2604    20923 
   insurances id    DEFAULT     n   ALTER TABLE ONLY public.insurances ALTER COLUMN id SET DEFAULT nextval('public.insurances_id_seq'::regclass);
 <   ALTER TABLE public.insurances ALTER COLUMN id DROP DEFAULT;
       public          doadmin    false    207    206    207            �           2604    20972 
   offices id    DEFAULT     h   ALTER TABLE ONLY public.offices ALTER COLUMN id SET DEFAULT nextval('public.offices_id_seq'::regclass);
 9   ALTER TABLE public.offices ALTER COLUMN id DROP DEFAULT;
       public          doadmin    false    211    210    211            �           2604    20861 	   people id    DEFAULT     f   ALTER TABLE ONLY public.people ALTER COLUMN id SET DEFAULT nextval('public.people_id_seq'::regclass);
 8   ALTER TABLE public.people ALTER COLUMN id DROP DEFAULT;
       public          doadmin    false    198    199    199            �           2604    20880    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          doadmin    false    201    200    201            �          0    20845    clients 
   TABLE DATA           �   COPY public.clients (id, type, document, name, address, province, city, status, "createdAt", "updatedAt", "personId") FROM stdin;
    public          doadmin    false    197   �[       �          0    20907 	   companies 
   TABLE DATA           L   COPY public.companies (id, ref, name, "createdAt", "updatedAt") FROM stdin;
    public          doadmin    false    205   o^       �          0    20958    configs 
   TABLE DATA           �   COPY public.configs (id, mailserver, mailuser, mailpassword, mailport, welcome, birthday, renewal, "createdAt", "updatedAt") FROM stdin;
    public          doadmin    false    209   D_       �          0    20894    insurance_types 
   TABLE DATA           S   COPY public.insurance_types (id, name, code, "createdAt", "updatedAt") FROM stdin;
    public          doadmin    false    203   �_       �          0    20920 
   insurances 
   TABLE DATA           �   COPY public.insurances (id, ref, amount, premium, "from", "to", term, comment, "createdAt", "updatedAt", "clientId", "insuranceTypeId", "personId", "companyId", "userId") FROM stdin;
    public          doadmin    false    207    `       �          0    20969    offices 
   TABLE DATA           ]   COPY public.offices (id, ruc, name, address, pathlogo, "createdAt", "updatedAt") FROM stdin;
    public          doadmin    false    211   =`       �          0    20858    people 
   TABLE DATA           �   COPY public.people (id, document, first_name, last_name, email, city, province, address, birthday, "createdAt", "updatedAt", contact) FROM stdin;
    public          doadmin    false    199   Z`       �          0    20877    users 
   TABLE DATA              COPY public.users (id, document, first_name, last_name, username, role, email, password, "createdAt", "updatedAt") FROM stdin;
    public          doadmin    false    201   O�       �           0    0    clients_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.clients_id_seq', 14, true);
          public          doadmin    false    196            �           0    0    companies_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.companies_id_seq', 8, true);
          public          doadmin    false    204            �           0    0    configs_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.configs_id_seq', 1, true);
          public          doadmin    false    208            �           0    0    insurance_types_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.insurance_types_id_seq', 2, true);
          public          doadmin    false    202            �           0    0    insurances_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.insurances_id_seq', 1, false);
          public          doadmin    false    206            �           0    0    offices_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.offices_id_seq', 1, false);
          public          doadmin    false    210            �           0    0 
   people_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.people_id_seq', 317, true);
          public          doadmin    false    198            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          doadmin    false    200            �           2606    20855    clients clients_document_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_document_key UNIQUE (document);
 F   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_document_key;
       public            doadmin    false    197            �           2606    20853    clients clients_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.clients DROP CONSTRAINT clients_pkey;
       public            doadmin    false    197                       2606    20917    companies companies_name_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_name_key UNIQUE (name);
 F   ALTER TABLE ONLY public.companies DROP CONSTRAINT companies_name_key;
       public            doadmin    false    205                       2606    20915    companies companies_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.companies DROP CONSTRAINT companies_pkey;
       public            doadmin    false    205                       2606    20966    configs configs_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.configs
    ADD CONSTRAINT configs_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.configs DROP CONSTRAINT configs_pkey;
       public            doadmin    false    209                       2606    20904 (   insurance_types insurance_types_code_key 
   CONSTRAINT     c   ALTER TABLE ONLY public.insurance_types
    ADD CONSTRAINT insurance_types_code_key UNIQUE (code);
 R   ALTER TABLE ONLY public.insurance_types DROP CONSTRAINT insurance_types_code_key;
       public            doadmin    false    203                       2606    20902 $   insurance_types insurance_types_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.insurance_types
    ADD CONSTRAINT insurance_types_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.insurance_types DROP CONSTRAINT insurance_types_pkey;
       public            doadmin    false    203                       2606    20928    insurances insurances_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.insurances
    ADD CONSTRAINT insurances_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.insurances DROP CONSTRAINT insurances_pkey;
       public            doadmin    false    207                       2606    20930    insurances insurances_ref_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.insurances
    ADD CONSTRAINT insurances_ref_key UNIQUE (ref);
 G   ALTER TABLE ONLY public.insurances DROP CONSTRAINT insurances_ref_key;
       public            doadmin    false    207                       2606    20979    offices offices_name_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.offices
    ADD CONSTRAINT offices_name_key UNIQUE (name);
 B   ALTER TABLE ONLY public.offices DROP CONSTRAINT offices_name_key;
       public            doadmin    false    211                       2606    20977    offices offices_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.offices
    ADD CONSTRAINT offices_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.offices DROP CONSTRAINT offices_pkey;
       public            doadmin    false    211                        2606    20868    people people_document_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.people
    ADD CONSTRAINT people_document_key UNIQUE (document);
 D   ALTER TABLE ONLY public.people DROP CONSTRAINT people_document_key;
       public            doadmin    false    199                       2606    20866    people people_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.people
    ADD CONSTRAINT people_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.people DROP CONSTRAINT people_pkey;
       public            doadmin    false    199                       2606    20887    users users_document_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_document_key UNIQUE (document);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_document_key;
       public            doadmin    false    201                       2606    20891    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            doadmin    false    201                       2606    20885    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            doadmin    false    201            
           2606    20889    users users_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_key;
       public            doadmin    false    201                       2606    20931 #   insurances insurances_clientId_fkey 
   FK CONSTRAINT     �   ALTER TABLE ONLY public.insurances
    ADD CONSTRAINT "insurances_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES public.clients(id) ON UPDATE CASCADE ON DELETE SET NULL;
 O   ALTER TABLE ONLY public.insurances DROP CONSTRAINT "insurances_clientId_fkey";
       public          doadmin    false    197    3838    207                        2606    20946 $   insurances insurances_companyId_fkey 
   FK CONSTRAINT     �   ALTER TABLE ONLY public.insurances
    ADD CONSTRAINT "insurances_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES public.companies(id) ON UPDATE CASCADE ON DELETE SET NULL;
 P   ALTER TABLE ONLY public.insurances DROP CONSTRAINT "insurances_companyId_fkey";
       public          doadmin    false    207    3858    205                       2606    20936 *   insurances insurances_insuranceTypeId_fkey 
   FK CONSTRAINT     �   ALTER TABLE ONLY public.insurances
    ADD CONSTRAINT "insurances_insuranceTypeId_fkey" FOREIGN KEY ("insuranceTypeId") REFERENCES public.insurance_types(id) ON UPDATE CASCADE ON DELETE SET NULL;
 V   ALTER TABLE ONLY public.insurances DROP CONSTRAINT "insurances_insuranceTypeId_fkey";
       public          doadmin    false    207    203    3854                       2606    20941 #   insurances insurances_personId_fkey 
   FK CONSTRAINT     �   ALTER TABLE ONLY public.insurances
    ADD CONSTRAINT "insurances_personId_fkey" FOREIGN KEY ("personId") REFERENCES public.people(id) ON UPDATE CASCADE ON DELETE SET NULL;
 O   ALTER TABLE ONLY public.insurances DROP CONSTRAINT "insurances_personId_fkey";
       public          doadmin    false    3842    207    199            !           2606    20951 !   insurances insurances_userId_fkey 
   FK CONSTRAINT     �   ALTER TABLE ONLY public.insurances
    ADD CONSTRAINT "insurances_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 M   ALTER TABLE ONLY public.insurances DROP CONSTRAINT "insurances_userId_fkey";
       public          doadmin    false    207    3848    201            �   �  x���AO�0�����3��87okؠ4)I�.� �۠@���_{˶ADlO�2��7�cXѼ��f�P �F��ݴ?��C�����Wv[��-�׌-�jY�2wY�F���U�(ID(�p~i�<�$%�H�	N��'*6�$l�v]߁{~Zo����ݺ	�k{c����:�`~&�R�)bd������0�-&b�&%��ʰ��_���wӦ���Ncc �X��M�u�	��r�F���B2�Sn������Us�g�"E>�Q.�H�x�!Wj���?�������v=u W����ٞHW!q��Q����F��t�%	Cq�w��.������[o�>�]eU��M���~'~�Q<R1�S�"���ơk���bu�����>t�s��_�<��KL��2����?A>��H��]V�4�`s����²��`�幻���ۿ�8�"%i1��B	P�?I�E��}��W���yVX�m��J\�.�,�O"?<koտ݄>�L����\��%�H�f�M�j7����د9��a_|��H*�<.� �K��]��
p��Y�� �O��3��0$���-�MB�h���J��Zl5�j�^�s[d!�|Y�pi��ܝ&A�㈆�(����J$18�n���ݸV����u�����G�<h�R�� ��j_����`�Y斡�3_z�y�$΋�#"�#/�6�L& W%�8      �   �   x�}�A� E��)�7�w�4!��u����h��i2�7��� 1��ٍ�:��[CI7x�k�b��b���5Z�����}�H0���������2��y>�.Y����/�}Ȃ��ƫ7�9
c)�U)`��)�L����B�e)g�@rv.̔����g8�/����o��LV�����(o�֥�/ oȤu�      �   a   x�3�,�-)�K��O�I�M���K���LNLKK��K,.wH����e&���p���r����������������������������)�=... j �      �   [   x�3�t,�,.I�K�LT�=�2%39��1�3�����R��@��@��������H���T�� ��gXfJ"g���*#S=s##����b���� �� �      �   
   x������ � �      �   
   x������ � �      �      x���ێ#I�%�l�
�/�0���S����I�X�x&
8�{rzkQU	TW0��P�O�O��sD��ьd4�'�;�ª�P�������R.[��ӧ�^���V�r�j��z�lHʷ�f�*��lެ�Yg��ܔ�͎T���h;��������7����M��j��p�����*�O4>�ࢉ�e�������߲կ�������埿��_��_f���_��Cy,�t���O�l���:]������_�b�%7_�d1�S�:�UǙ
<�a���|�qf�%�_��)�r�u(L�����={��/��W�?������;�m�l��[]�6٪\�O5���_~��~��?�9��m�˿�|��&~����ٯy1�6�_�E����!�*��=��ۺ�n�ò^�ٮ\�����N�W�k�d$����w^����Y��6���K�Z��C��{��v�`��Om�Z���|VD�����Ɖ�om�Q�߷�z^������ۗoM6/W�f�ߖl��w��3��^���oмBG�5_]����S��:�'��9��f�*SLt�)�[[����i	���\ָ����i^n��y���9�`�O��Z��5��>=$Hi�e�5�8�>�م$D
p��e7�x�&Z�]��Vy����y� �S�²|/��}��>����T�?p�ޓk�oq
�U�"�\�O̜�8hm�'Z'%e��2��UU�C�ŵ��U�Lw��������1��3��o�'�!�����훧ry��ܗ\ݒf���ؙ�f�q�g>��q��<7nb4��� �����ܖs\�qz~��!�j۴�͑'<�=D~�9�X�/
�=,'�Z�3����4�9�r=�b�h�nz7��\?��6�r�R��m�1�4���L��}��c��ˎ�Y�<��f��m�u�\+�1�.wx��
y���g�e����*{�BqL��[	�ޝ����^��"#&
���ϿZ5�pSq׮S7���F�A[��E�^�|����K�>ݕO�̐�E�;<��D�vG �8,�Q|un��՜��n��������c��ٺٮʩ��5�]9�5�z7��� ~������7v��A~��q���Qv*o-�9k�.t�������M��R�7�}�*�M�o?�:%Oxz/5~�� �9�E
�Ġ���m���0�h��p��'�Gyb:�Ν��_J��m����t��|��R���� /��Q�p�~]�՚�ҷ)�Qpi���ŏ�^��~����d�C��]"V��C�9�\4��b! b�wOlY�e��C�a~�v�-&�����z��lUo���/W�L�7�^C��u��4tB\T�����J!x����'W�	�m!J�I�Ч��k��-�mY��Ea���o`�z.�ں����ً6�D��-d�
��][gEP�`+Lg䴁�a M�Ua|���Z��w����r����� �Fb{�Ͼ��1����Ǆ�n�8��|������zkSh�	�lUN�[���^��3�(� 5����o�a�l��f�A(�	�o2	tn�� �� �Tygόv�#%�E��xm��մZokd�`#h*�E]&2�2�]Ol#�S�Z^�2`g�Z�LQ
{��Z�Sj������@j��v�~��}��բ���t�<�%�=Qw���M��_h��\e.5 h�Tѩ�F�x3Q-�4@	O������^��uA@����
�[I��9Y�0���/
�b��K73��1�3T^��1����z1}ō��u���;�°��o������?����%d*̴ႎ{~�q�8���"$��1p���SF�m �Jx�z��çm��i��0[��Þ�0�5*����CB�s�'����ڍ�E�V�aܦ/��&�v�zM{���q�ٮ��N������G`$n���;t`�,�4A�a8���`�_�D�_����/�깡�x�R����ã������j���NO�����It���t7�eL�e��k
���=G�ux���?*8�=�wt��vt��0Ґ��f�������NG�v,_�&A������}O�����KH%v�}�JE��������H��r.j�v{����66�W���_<77�jີ�=�C��

Rd�\�k�g5�������p�ĝe	l����Z��ѣx�EQ�� C���0��ìP��t�R6��x�sԑPFɨP
�Yl�Q⵽ǭ�/pʳ��7F.8�@\����CpH(��,��Z*A4��t�����5t4 |4Z�Uà�4Q?�x}Ͽ����H��ń�!�m�6L�=���v�h��E�7�,�1j�f���Ԭp�4��,��߷����,H�%�7 �F�WU�:7��I��G��$d��Y s��Q(��*y{x�o��>�EFg�|U��G��F��"@������s���KU�LnrW�M<mk���LjX1/������S�i`$J�
���Q��>�HT���b�{0���S�����rj"Ν�V�[�`�gT-q7��叱j�����O(�!V
��*�Qmp�x�&�#J�&�rK/�\���9ͷ�����jĢ�%��Z����\W㎨���c�����)(
(�c�g����i��d`�ڿ$�+�?ŭ������K-;γ"�cj!�,�!�0ȳ�3�:���\PLL�Ͱ�����ۿ�ڦ3������7�/Ic@���x��o����$�r�����=����r�$��B�s��Ģ�ؼ�K��콁w�0	��5�<�@TFe[A�jw.��M�6��tN&I"�s�I 9�~P̗&o[й���ak1�nQ�M����b_����K<�Հ'���ע�4$��s�{�'�o��@ϲ�^!S��2�Y����E����
;�r�(���;$h�Ʊc̭is_e�vS�U���k#�o�$n9�&��ex�I���L�I���a|	��Muΐ���(�K�y�ySm������o��	�e~��3
���`��k������3�C���\�	���9N?~D 
����i[�$_Wu�D���� žc�`P尬��9�*��$��*������=�%f1bIc.g�8�w|Ab���
uab[W	��R���^OS�Nt������aLA8}Ts:oc����	��A;�k���'���%�����`I}��[օ+��}/��n�}I.,=����$�6��9IR��� #S�˃p�ǀh��-�Dén��e
=�*�~,y��#OK��U�O:��m��ϸ��\M_��vAL������r��t���Q1x��$���@'9砌���� �`������r ��E������d'|�%�j��=����p 5�S��ڼ�I��^׌B�5��嘇`'?�y:��(r�9�%��(��q
�(�:��$��	�Yߣ� �0���#�+�!�����*7s� Knc$������w%����S�Z7;��bh-@�)�$~�� ���9X6_������pP���갷��S0=��j葈,�
�����1l����Nx���^m� �پ�^����W;o ��c<���B���jV��>�7j}�187~3 ����e[���bJ�a
e�h��'��Qy���F*5���f ���^��W7q�����3@��^
��k&��>� ��{=������.X�fo�p��snY��������`-HݎF�-%i���|?��k��L�]LIo���2˺����{ї�Įӳ��xMp��:L�d5���C��u�xO�Q�.PI�����?}�����ߪQ�c��>$J�d'��y��š�
w�����\ʹ�C�2��s��]vH���V�Üڿ��ǟ�1�*�����dŝty_��IRm.�}[��A�f��
�'7������Wؒg��S����
H�%�S�[�G�}RrqrI�b�s`���5���J���0�]W`=�ޝ}[@�׳��i<R�D�o��d��<_�X^T��a�SF���+Dgcۤz���x��n����#��    ��a.���I�& �O�xf`�m��	�L�F�-/�>��:�;�����+��ݑ
��������.4�&���C��"�u�~�ѧM�^ny��f�����Γ*#2�ώb���~�����H����j�=��M,t԰��Z��\����ܾC��]�B�X�Y˓g�!�����.`�	�ٵ��}W/�z{��.(��z�V��MFj3Z~Xi6SW��� �s�ɢT��x/��k��7���IF$���.��0���W�D�C�
wKA'R���j�i��Z'1;l��e���
���k�t�H�VˑI��WϫG�c�ͣ������ ]�B`��<��}:�BbK���_^��H�8ߖ1�~�r��JZ�r�8	*e�4�Cg��"P��%3~���P_Xt��씳������"���!�K�m�$hV��Y��P2ꕽUp��T��5+�e������Y�}�1� �����*f�!�L�������-k�$^�uh'�c�g�\�.(<�I0�a����e��Î��3=���C	�ξw'�o�j]}���#w
��X�e��E�C���r?`�,�ڨ �"dm*����@� �MMrw���Y&&��R���a@J.I!��o�E�{,t(:Գ)����v����ٗr��GJ�o�	�#)
 ���
��HD��������5ϡ/l�fyF	�r?}��͸Ϻ�sq�t4R�{�a�;����^R��g��M�m�e՚ Xr� 9O	�2+ܞ�K|z�)���9�ug�@]�@�$�0���'�&N�N��k�p�vO�����Y����
hPpt���̫��c �V(/e��b�_=�K
k'�@��.sBp�V�sݼ���0)lg��d̔� ��
�<y���K�$�.R�(�5���[�$�R.)�.��K��B>Dgd8����ϊa��j#<��\]ۮ�������n������/�NV���ٱK8��"��:���f�����PL�R]-�
���Vn��� X�y�^,��cY-!�O�;���!��^�@�M��XdB�R�k�Xn��~�;،�e�p�.��ȿ}�RM����
G'�)�m����*� d%B1���Bk/�0Hd�@�);���>,���i��W���
����M�>��3�r��ԋ1>�1�p��0p�$q?X��&�M�i�"�C�m����tҒ��?�?PY�S9�M�5�N8wH�i�D����ǅ��e��]��yM���s@d��F
H=�{5��%�f�>��7�wq�$��<���۴D���'��s%J����]�8��~|N�=5�����Dr�rK�Y�����h�
�D�>5}je����czly��3�i[���鸝�����'L�Eh�ިBJ����ڙ�V�=�<訋I�O��*�-���Po�E@�*���~e���F{�/�rב
�H�GEsR�oS�a]�W�B�o�t��!�̞X�=���Rw�t��e|�_��T>�m=^UK�j,������v��lnа�����.j�}E� i>�;	���������i�*�3��͇�X����)2�ж�\���O��8)XibT�{�m
�����+L܃i8zi^��yYڸ��F�[n�$z�k��ߜ��O
#I���eU���>�~*��j/.A����%=��c:y0�[r��
�=UpwH��
c��
+^��v	N��e��gC�_���]�$&�qTsE�0�1�=���DיMg�N
� ���[���!7�l]�1(���|"�w�1앴m�d� W���O�^N��	�
����I�bY����ö^�o�%P�����n}���CJ�m����O"�`�:V:8���]��Y�
�&�z{X=��i��~G(���q�#�uQ�|�
�i�X���M�Rkw	oNuڶڲ�vOtUQ�f�m���>�!J�]n2�R���C�n0�C��Yc@���� >h��!%~ߊU%�@�9�B	K�z�}17�!2���S� I�z��
v0��
gLN�绮����6	��~�������%Fu�%�
�dB�b���Z,��+�>I"�*DW�c%3;XF� (��AB��E��Tg����]~?�*�E#�-o�����I�d�`[��e�B�����PQ�j
�b�T�k�7_�;��S��-If�9�����̈́�>��e�/=ѯWA���q�5Ig���Qv���ޙ�x�dRGH�[�\b���wf@_���/x���rAY��3�Y[�
��,�s�E����X�pJ��mh.
m����̀B� 1���1��f�CЅv�H���X�{姣/�_�
�О��`&n��3�&��IfWx�i/�$�@1�Ym���b0�S�=�e��W�R���
 oI��춈q��sj��. ��4��@�W�:��O�>��p.�_V�uo*˪^��Ĝ�V�ߊc�6kL��C��z���V�[t��w�Nc��}
f�&!���]��N6!g��.�|����%~}�_0]0��0�9#��z�Z�?[���=E��>T��e��%��t�Ҋ�ek�.�Ԅ���#w5ڷ��K���R%=k�}Rhk%f��������;b�La�S�Q�\����(�s7F�|y��A_���u5���Ek5P�m[d�*��w�o�DX���x�@�򍧧�U��Ul#Y�VQ�>�3��j�D�4uJ�i-���s�֘���d�"��1�BB:��O�8%ķ�azaGG�*���D�D)g��R��,�-�BYI�G����l�b���DO���i��z�ѝb�88ˇd�����&�)�g�!Vb��En��E5���M�� cޏ��S-O�6s��"��s��0�:�Q07^{�r/����O��)�������I�ϻ��|~�̀\�,�$����*8!��.��2{��n���h��&$xX�}�7�zF+""�G�='Q6�@
'�&�Ǽ
�	���9�iX�i~�G&��[uΉ�B���nk�$1��������:�5kn�l�������f�z�[Me���qc6Rb����Q�t�9UM@'���%ň��D�x[�F>ȟYF�`�����I��3�ܾ��"�N������
���YR^�+8K�����L>�-�����Alg豫Z0zA"�ý�?�6i$.[}�$d{�+�i��Z����[	m�|�0|5ʰ�.�Օ{X��C��*r�+-e��_8�Y�(���頋Fu���%é>������d�k��UآG���;�gvk M��eqͲ�	�<<Ւ�/�`���oY"�cm�-�f�_y�=�����O��6��'�l[��,�e�R�#�Ș�(�"nx|�c-����JE�H�b�8~A��
���"[34�>9�
?J�x��!���|�~6>������.Y#?��9�	0&s8�:�ǧ���E���W�����(4�f����P|[�p�S�c�Ԑd\�$VHg��}
�l�T��~^��>�t�l��xH�F�Y�+���e?o6�~�8�/�Cifٸ�`�\���If���8
�ȃ�|��6��������>���\kv�ݹ_?��{$�裢� �#-4�ͻ!��v����W�����2���v̯�9>c�F��,ýM� �0fh5.����fw������
��Y�5:L2���N۽�f���2
��jtM����ט��ɥnn���pfʍ�Yk�A�ϛ4�m���w�@�;2�������k�D��k<0��h�Tt�X�er�?-��*g�k�|]�c�Y5��C7-���`/��ܻ8#93ӧ��<g���}
O�.RK���[Z�������ͧ��bx�����cq���x�V�� `7g���A9��Z7����"�@��";����n���#5ŉ������;�'R�D�N5K�x	���z�,X��fQN��i_�__�Y�l�O�|�|��IQ��PPQ��AݦH$��Z7��1ʛ�E�^�;Vul��J,�Xp�Ķ~��ח_�
���D�x�������K���zR8��	|	H�A7��R�q��f��v���~�1    .��t�����Iz�"�/�M�.���ٰ�λ�,� �-�P-P���I	<<76����2�ΞW��$��a��|r�
�G8����L8�Z%�����g�jsXC�wJ_6G&��:��Xe��W�����\��^nۜ�GK��s��%�k���������Q�t��1 ���^��F���H@�y�u�$f�9�/9Vf�aT�Z�/��^V�Z/�Rx��-�oY��?I��}k��Tu �������sp:*�<K)�{�B�� ���﯑��+�I�w����S#PԷ���2������˥�$!��1�f��p!:���xH�(|�u��+/�Y��ʬ��@
^��U|�|��ܝg�I2��@[CY��Њ҆��~h�SXRb�9�qsX�`��dǒ�	����$frr�sb�v�L��}�\�r�4�i���Y������M�Pn�5f~	>I�p�c������h�b�45e����hY��_j!�?�Z��~^�4�8�ƙ�3]q}N��Q��p�����OU�� �V�aH�±8	�N�_@�s>l]$m6�D=1�YTQ؁yAb�.8_T��ϡǝɞ���@iD��&}U-hɒ�9+l�
�����ĜbT�cf�m����w��I�ќ�g%M�B�2c䩔�CU��_���"҃�����?W/���۬ri`��֚/6�Vl�f
LJZ62�y�
���b9���2�>�Wq�A�.�!
�j��V�oƳ F�Pնfa�O����0~�fq���~^I�N�=��q��8��9��Cѣ��s]it4Fڙ�����,�`w���i����Lx��(b7�h��Tz�6�=��C#+�\;���g�W�S����Nd�:��4c�?�?2�L6[��;Y��f��]�>I���8j�"u���:�=�;�b���Uy���<��	����tAp��mQ��?�ai�Dɽq�Li�����χZ0]�KJO�B"e�z��}m';q�i��P$�xV��i1-pnV��l;���Ra7�f��(�|��Q��AT��[[�!u�$C��f�ˆ,��ʎ�
����i��gN�>�,����V����ܕ�!#��?`I.He8+R7�M
��|L�	d���r�TE�k����m�)OC]��$<78��ē��h���DvY1O���"GFU�O��b<�%�xp��q26ׅ��������B{��1�gлwH� �̠�O�9�[t���Oֺ�&e)Q��5��m�ȷĖ� 3sj@.H4z�X�ܞ���%E�N#��,� ��CZ>�ӟ�<Y�2��7N��a��]�r��Z�J/!9�5#p�e�t[��c[3o������qN���рԧ
?Ù
.�4q����2�� �M7s�+�ny�|a��T�����/
jt�މ�Ȥ���pA�fy��+��`���w�2-W`����{���T.�P*/�=U���~4
��Ji^�~e�{$�c�ba�C��7q� �jUN_j.�a�|P�Xq������GХ,��:�$�{�k��#�Ss6�� +:B�1ƫ�\6ԍ�N{eU�?껜�� ��B.�o90�J��H�������T�
�=k�ft�C�w͒b�����z�p熹�m�CD=�d�m�E�(�7�~��aQ�]]:���)����duϑxW���k�yy⭐��ʗ������abW&�[^%6�
���C���Դp:�j{x�|�ͫ��8Sz��]�d)UΊ�,��l����qY��?�n����`�j��3]�LH���K)��n��$%���
��p \z�n�d夆�\2\Z��V��y�lZ��\�˛�g|mډ'��
���Rl�"�o�T_n��^eh�P�ٶ�����4�M���Pgd+Ή�Ȣ��y��$��"�� ���e��j��O ��n	|��e[g�jy�2�_�|�B�|���M���xL�X\��F�K���a4��U�Z�Y��lۅK�,����{
W#{m�=��Ѝ?���GJ�Xb��Bl��.��,���5I��<8��H33M���Ϲm �� �zAG,k�
��x$�R��x��L@u^�!Q���m�~�g��
]��)�`-}h�t�9��Z��n�[
Տ����(�#�p����o
�vi��o/�����9��Q��Dx`���Q�)�q/C��̺A�+��%�i(^��_��/��`���i�g�Ƨ(�X��/�g�o��Ί7:�A<��=Ʉ�K��
��ܬ��9e�b���q���
�
qO��&:����H��#�S�RAf�Fs�$���7L�D�}�61f�z���f�E`�&����-3���u��䰼��ks:qT�8p�$iI0�Y�.Bjs�u癤P����󰦈�X2ul)kj�Wp��3�ݕ���z��p(��{���ƶ����,���S܆���y*���6r:��exޘ)L��Dm�?'IN�[�x�b
]�@���]`�T�#��D���C6�2��|��)W�P\ِI
���֯ϩ���M���e\@� ������b��U�4��[��.W+���vA� ��;8�k��n|d
x���8���^�]Y�!	��|g�> ���sdqqY�8H��x�1�i E��v�,b]��i�д�%#�rH��?��o���e��M%a�7i�zټk+�M�<H@�Ap���=p����UG���)�*R�q�L{���fE��s�,"�>�QK��ܚ��0����a,2�|�b.d�ߛ|��`�Ս�jt���� �nv��s�$���Ф���؜fF/��(�f�Z�u;�H`%M�K�$�X��0`3.H2N
O�~!������2�vNE�����9�b�賖��)<xS�r�s1�~��9�J2�B��&�q:����jik��ݪ��,�M�fn]�X�i^�ζ��E�ʹ�l�Xm6��~
e����u�q�8i���ޥ�G�o#B���zi�s�DϏ�U\9\2�����K�]�j:S�UgHZ������a~�vUh@ч�7��Ĝ�[�_;P=��8�И���Iެ�(j����N۵��XP��{��X�����ǗFI�i���YVr�Ed������;5Y��B��4 ��a������7�>�����c4��	Gv�l��^�U�s@��z�X����d$�册Q4ǘ�
~&
'Ϲkm�#	���̛6�YXӺ�����;\�M�7I��ݯ{J@$9��r�5�)mi�C���4�'�n�)�(;s>��V��q��
.��H��m�%3��=�I̑n�N=�9��v�
���쥋s1���M�"�/�?�C�x�/q'{T|>$�$I�kmD�Ӱt˖ �*
)�7'yW�����^��T�?�Yo=����@��
\�I ��D��4/��`gy���M�,�bc?T7�^�,�ڳ��A1a׀M '�9CRrN��CxUE�cw��������&ay(�y ��+F����B�7�� �I��pI��ඵ�9~�(�l��dM��Li���:=�M���w����[��M�v�� �$i����=��8c�T\�˂�3��a?��~�8Tܿ��>�}���x^5�b���/��VFD2?��>^���w��,�8����]��VA;�@T*1A�q�U)C��ey
���t�}>�J�W5�G�y�B����$Y����
��ܲw�$��6�0
�ؤ�9-��=�4�7�����[af�w��$���C���$փz}�����%���
Y�Y��[`�H�e��I�i�BD�%"�Gn+��e�ٛg��	�Ӡ�fM�췿���>������������?�E��+�b�n�
�� G������	���/1g����dG����y?��,�b��5���6�z? ��4f�rP�V��1,`��G������K$s~�����{���}s�7|�%���)�L`��
�}�]I~&�p>��z��s+ğ8��F�;$�v\�����V58�/�X��y�	�H�Mj����1k���G��z����=j�$�+X5�Zb��;�S    wY�*��4e4ut��l)�qy�&�����ϼ�%$�:Q���s�§��Y[���w@��V,�������C���acᐢ-�`iHP.H����K��f�CA�%U�У����m���M:��r�ۜ�R�z�F�;p�$�\��Q����Q��w8����s����Ƈz$>�G�nK��e(��������T�W���������8Y^WqHʓ��s�h�C�s��]I0����I� %"�4i��C�_YK5��尢��Τj&�t���v���,ڒN��h��̕�����$\j��<��mÞ6�}s�����.���[����*"�Ff�uY�{�n�~\�h?8�� �)6+��jVi��];�5*S��
���u�mz�Q�� ��)Kq��B���{� 	�+d��|�#���[���47K0���xo]'�L���U��U�C�:0��F�U�rJ���l��!��GG�UK�  �)̩M��H��QhRԵئ/p@���痆��r��VoI1[�ìP��Vq����$�f�QM�]U�S�
O	�ƥ�
ٟ�N�2Hh�32�gf�^�I��<(���,A������Y����ٿᏳ_��o�~��W�`����o�1-�n+҈��4 @Ib�RRH;�{g���� �`���=�~��^
ZhӬ�~e<?��{�$d�̈7�}�0��u{��̵�<��W���x��:uk��
�]���.����KF�;2+���H*\�+H�������W��׿����-{��/�������_��ٯޙ�Jڡ}{�]W_���������a�Hn%�Z��H�r���9�~�'�M%��^�ۿ�i^9���ʲ������00DZ	n󙿬e ���r0�֦&>@���N
{����,���S�n��Y�@�;�uޮ>fd�kf���Qҿ���(�%��h�*��~�&�-���z|���n"ƴ�*�t����u�̖QR��QN�5��u�-d�1�j��vV����ԏDա�rs�l<g���� �Q�eNΚ�Ҿ�2ϱߧ��"?m��[�{�ٌs�g���-L��qp�)��;�+Q%�S�rB�٘
� ����\ӭ����H���{�۞�~6��7i�P�/}S*_��)��s򢳿����*�ZP������#��#¡��6�;˻9��$Q��̥b"f��W�\/!��,��`w�������ip���b;�7J���ƱZK;��IpW��:ڒ��UV2�ηY�6?K�d1�
�;ʍ�8n������$�j`}'��T�A R��	n������^�# ��7n�(w���U�˵.X�Z� �C�pN����O��H���`�鼔�4J��(x��I�����L�����)�'s�<J�Do=Յ�\b	�ׅ�6��׮ldm喍SY������iO�g�`��9W&�p���}���v�ݢS{�anL+����8kr��+��ȧݷ��Ύ����úG��I�[p� ���+����nH��v������]�N;��O���Cc�4�>z����G�C��Q��uxz��!��8GT��d�z�9l���cmf���ݜ��&^��}r#�ޭ�����M�"���޲�X��z`�^���,0����cY��uM֗���G�����K�Y�W��C�6�{l��O/������^{p�XB���B���| ���5��f�D�N%7O�ϸ���m�����H���r*9!�?��x�!Ĝ����6WVB#��'�[_�f�Ȅ�~@k%�8'qƳHe�~���s\%�9i�$]�ި��u�ʊ&����Y 2Z/��B�*+���#� �qp��9_J�����X\�dU,��@�z)
Ҍ֫�=6+�;Nq�4n�<7K����Ў�p]�|����xe.z$����:r�y�6Y�c<}���[��9��͂�V�,��Ww?�m���`̱�X��vA��5�{;ѩy^�.B�78}/��jw�Wx�����o:v19����KQ*���� IDb�T���30�u���<ϩ�˺\��)/We��J�/���[������E��:�5q�ՀH\��΁!�ٝۤ�6�`��ɤ����q�Vюn�6;�n$��}!�N�[H=�׀�n�Q��{l.���N�a
T�@�9��#��{� K��X�͖�X�{x2UI�2�Z6�|��s�T��P�m�^~8��MK���wپ�n���#��7x������ �dJۚ �A�m&p��<l��+�5�{�֧j��}v�&��Z�h`o˕����i}�z�I��`udA[�2�9M��y����
�4ͼ=�������i��mH$�FO�
��&�@3]�;$Z��k�m�|H+C���l��͞�g��H��4�1����[@[^�������H�Q�x��.E�e^��mu@��	��Ƒ�Ð������*�V��Q�z5�ќ=`qM�pK�}��́[M���ZOe~�L;v�89�l��j�<(�`uw�S�&MM�����Q��x�H3��[ń\��I�%9]��Ě'�op����bqc�T�׺�p��1̔�wHR;�G��2��]�C�xw�R֦�ڵ�'�x����^����3��8�i����^���Duᡚ�3
m݌���F���m����f'�����~\���X�ޢt���p�I�t�dfBr����@:�	k��AH[j��W��m{rBpc�HxS��zܕ��Hy��C�$����R1��[W�]䖊3O�eU2���g�Z��IDp$��Q�]c��̓1��dZ�X
L�����4��/V�u��������qZ^�C�{Nb�^�3p��NҬ����u�}v�<7�
��\/��>��,�!�>��M�ߘ�r|A"��:������1o�����4{�B����R0H}�����/����5�I������q�T�����b�K�R��*��o2%;B��;<���7<�]��6���+ng1ܦ�2�)r蔎�>K<��N��~vx�R�o������ �Vz��������D����C"�`B�(QA�3��6��Z᠓v+g�w�c�CN�C}���-q�-�5����&In�z�:0Ҁ!
y��{Ɏ�S����yFW���헧sK=����MxU��&q�
�p`�I����<���wk����k��8h��O�H緂�mQ��s�2���_���E����`t��oC}!m���
��nR$����Y��J(U�A7��T�mAR �a�s
_��S���rPmp���7�ݱ*œ�Zʤ�e�.�*j�~�^�I�k��X�_�ƚ0'�g]6f��L���p��w�_�^hbXp���[�����9H�$2˶A��
-�(.�@��VZPN���+�K�c������U���ǘiH;+���NN�M妴L��}A��.��G!�.:��5=�)�`WJ=^�-o�GTy�.1
���F\5_wH�*�R7Ni��G[g��U$��q�l������Yw������JbY�U�oOJ���r��M�;��.HD������j���sQo[����W4�;)����/e���" tj���7���j�kR*��5U���k �fmT�o��^_��_$����a{�$��K�Q�
��s
1�0x�Jk�^▋#�'�T�ଖ9^���Tl�j�c�0}�!�<0.�孠���~�{�5)�7�mߩ��anc�y<m�1;k�:yw�g?��58r<z�3��k�k�l�
*0
VȬηe1��:Ƀu"!����qw,;�x�����;�3�0�Qy�%�؍���{_�.TF@r��j������Gˏ'�|�إ�dO�5,7�xq����KV��;��/��JՀ���B�(�\�r��̋�vH�I]��!�&��~�s l��nє
_�{�u���nS���8��wS3�,�jĽ���Ǚ
�)2��0+�/�z����X�ZsEx��0�H�NJi���޻1���8����S�\ sW��#�A? ����˹�|;��`G*�����5� ޾�s�]�i{����u�[5aE�����{$���Ä�T�+�ޅ(����J�� �  r����R�]���~'}E�^���)�ך�3�抙ʯ�r��m�!
����C���ȶ	N���	t[W�2{����֣\Vq�����n@8.Ht��g� ��4E��by���9-`�ǒ�%�+.D9Y|�R�8"����$>g%���{!�k��[5�Y�=Ɂ)�ٵ�������� ��L��D>N�S��[N���� �3�k�i:ڞ?.[���%��t��� ����-Nx�����f����[�f�^3t��$)��pH���T3���<�+v�t��S�m{K��FpR���Ł��S�]��}\Hw��d����tMb�fQ��*U��Ξz�ڀ��P����}ܢ�eU����z~<&/�ac�~� :S���d�[�B�'��d�J�^M�|�c{��}��\^�.���}�(�c���t�r.Ό�R*�
��?�	�>u�v5���J6�$�zT�� ��-��_ �L�$.e��6�=��t�{�#��=�����y�nJ.jfi1y.�si�Xl�Y{�P�Py��h׷�|抁;� I�[���qi��V�ڠ[����K����w~��tQ�xK���k\���n���FI�C�P}�M�7��T�ז�O&�+֕��ʭ�`_8�� ���(M�cY��\�Gj{�,�$��Vh��ڕB�ඳzW������V+��9��8W�š���������xҩk��*�uMb���6 r��l2���N�w      �   �   x�}ɻ�0 й�
6��%`�0���1�KŒP%H���.�.g9H�#�����T
�%�n�{[u?�-�A/[5j[ء�tAvs�Wb��T�8��<yr�>9�b��)�v��_ֲpW�͸�$a��Ep9�#㞿� �^=J�0!/�     